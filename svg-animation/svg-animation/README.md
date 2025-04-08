# SVG Animation Project

This project features a luminescent orange creamy light reddish pipe that scrolls through the viewport, with a bubble moving along the pipe. The animation is created using GSAP and integrates smoothly with the existing codebase.

## Project Structure

```
svg-animation
├── src
│   ├── svg.html        # HTML structure for the SVG animation
│   ├── svg.js          # JavaScript code for GSAP animations
│   ├── svg.css         # CSS styles for the SVG elements
│   └── assets
│       └── pipes
│           └── pipe.svg # SVG path data for the animated pipe
├── package.json        # npm configuration file
├── tsconfig.json       # TypeScript configuration file
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd svg-animation
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Project**
   Open `src/svg.html` in your web browser to view the animation.

## Usage

- The animation is triggered based on the user's scroll position, creating a dynamic and engaging experience.
- The pipe and bubble are designed to be visually appealing with neon effects and smooth transitions.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.