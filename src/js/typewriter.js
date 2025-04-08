let activeTypewriter = null;
let chatTimeout = null;
let isLoading = false;
let currentConversationId = null;

// Add these utility functions at the top level
async function fetchChatbot() {
  const chatbotId = "67d14900b2fdf1ee39aace15";
  const chatbotName = "Andy";
  const url = `https://api.vectorshift.ai/api/chatbots/fetch?chatbot_id=${chatbotId}&chatbot_name=${chatbotName}`;

  const headers = {
    "Api-Key": "sk_gL0nwx0GUPEFBBFi1ZQs0SSQADw8AJ4CUXCrf2spHzSDqWYD",
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log("Chatbot fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching chatbot:", error);
    return null;
  }
}

async function deleteConversation() {
  if (!currentConversationId) return;

  const url = "https://api.vectorshift.ai/api/chatbots/conversations/delete";
  const headers = {
    "Api-Key": "sk_gL0nwx0GUPEFBBFi1ZQs0SSQADw8AJ4CUXCrf2spHzSDqWYD",
    "Content-Type": "application/json",
  };

  // Update body format according to API requirements
  const body = {
    conversation_ids: [currentConversationId],
    chatbot_id: "67d14900b2fdf1ee39aace15", // Add required chatbot_id
  };

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Conversation deleted:", data);
    currentConversationId = null;
  } catch (error) {
    console.error("Error deleting conversation:", error);
  }
}

export default async function initTypewriter() {
  // Wait for elements to be available
  return new Promise((resolve) => {
    const checkElements = setInterval(() => {
      const andyChat = document.getElementById("andyChat");
      const andyInput = document.getElementById("andyInput");
      const andySend = document.getElementById("andySend");
      const inputContainer = document.querySelector(".andy-input-container");

      if (andyChat && andyInput && andySend && inputContainer) {
        clearInterval(checkElements);
        initializeTypewriter(andyChat, andyInput, andySend, inputContainer);
        resolve();
      }
    }, 100);

    // Clear interval after 5 seconds to prevent infinite checking
    setTimeout(() => {
      clearInterval(checkElements);
      resolve();
    }, 5000);
  });
}

function initializeTypewriter(andyChat, andyInput, andySend, inputContainer) {
  function startTypewriter() {
    activeTypewriter = new Typewriter(andyChat, {
      loop: true,
      delay: 75,
    });

    activeTypewriter
      .pauseFor(500)
      .typeString("A simple yet powerful native javascript")
      .pauseFor(300)
      .deleteChars(10)
      .typeString(
        "<strong>JS</strong> plugin for a cool typewriter effect and "
      )
      .typeString(
        '<strong>only <span style="color: var(--creamy-orange);">5kb</span> Gzipped!</strong>'
      )
      .pauseFor(1000)
      .start();
  }

  function stopTypewriter() {
    if (activeTypewriter) {
      activeTypewriter.stop();
    }
  }

  function setLoading(loading) {
    isLoading = loading;
    const sendButton = document.getElementById("andySend");
    const input = document.getElementById("andyInput");

    if (loading) {
      sendButton.disabled = true;
      sendButton.textContent = "Sending...";
      input.disabled = true;
    } else {
      sendButton.disabled = false;
      sendButton.textContent = "Send";
      input.disabled = false;
    }
  }

  async function sendMessage(message) {
    setLoading(true);
    const url = "https://api.vectorshift.ai/api/chatbots/run";
    const headers = {
      "Api-Key": "sk_gL0nwx0GUPEFBBFi1ZQs0SSQADw8AJ4CUXCrf2spHzSDqWYD",
      "Content-Type": "application/json",
    };
    const body = {
      input: message,
      chatbot_name: "Andy",
      username: "USER",
      chatbot_id: "67d14900b2fdf1ee39aace15",
      conversation_id: currentConversationId || null,
    };

    try {
      console.log("Sending message:", body);
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (data.conversation_id) {
        currentConversationId = data.conversation_id;
      }

      // Changed this part to check for 'output' instead of 'response'
      if (data.output) {
        return data.output;
      } else if (data.error) {
        console.error("API error:", data.error);
        return "Sorry, there was an error processing your message.";
      }

      return "Sorry, I couldn't process that.";
    } catch (error) {
      console.error("Error sending message:", error);
      return "Sorry, something went wrong.";
    } finally {
      setLoading(false);
    }
  }

  function displayResponse(response) {
    stopTypewriter();
    andyChat.innerHTML = "";

    const responseTypewriter = new Typewriter(andyChat, {
      loop: false,
      delay: 50,
    });

    responseTypewriter.typeString(response).start();
  }

  // Update click handler to work with container
  const andyContainer = andyChat.closest(".andy-container");
  andyContainer.addEventListener("click", async () => {
    stopTypewriter();

    try {
      const chatbot = await fetchChatbot();
      if (!chatbot) {
        console.error("Failed to initialize chat session");
        return;
      }

      inputContainer.classList.add("active");
      andyInput.focus();

      if (chatTimeout) {
        clearTimeout(chatTimeout);
      }

      chatTimeout = setTimeout(async () => {
        if (currentConversationId) {
          await deleteConversation();
        }
        inputContainer.classList.remove("active");
        startTypewriter();
      }, 10000);
    } catch (error) {
      console.error("Error initializing chat:", error);
    }
  });

  // Send button handler
  andySend.addEventListener("click", async () => {
    const message = andyInput.value.trim();
    if (message) {
      try {
        // Clear input immediately
        andyInput.value = "";

        // Send message and display response
        const response = await sendMessage(message);
        console.log("Got response:", response);
        displayResponse(response);

        // Reset timeout
        if (chatTimeout) {
          clearTimeout(chatTimeout);
        }

        chatTimeout = setTimeout(async () => {
          inputContainer.classList.remove("active");
          if (currentConversationId) {
            try {
              await deleteConversation();
            } catch (error) {
              console.error("Error cleaning up conversation:", error);
            }
          }
          startTypewriter();
        }, 10000);
      } catch (error) {
        console.error("Error in chat sequence:", error);
        displayResponse("Sorry, something went wrong. Please try again.");
      }
    }
  });

  // Enter key handler
  andyInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      andySend.click();
    }
  });

  // Activity reset timeout
  andyInput.addEventListener("input", () => {
    if (chatTimeout) {
      clearTimeout(chatTimeout);
    }
    chatTimeout = setTimeout(async () => {
      await deleteConversation();
      inputContainer.classList.remove("active");
      startTypewriter();
    }, 10000);
  });

  // Initialize
  startTypewriter();
}

// Initialize when DOM is ready
// document.addEventListener("DOMContentLoaded", initTypewriter);
