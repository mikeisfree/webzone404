export async function loadNav() {
  const response = await fetch("/src/modules/nav/nav.html");
  const html = await response.text();
  document.body.insertAdjacentHTML("afterbegin", html);
}
