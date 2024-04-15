<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Priscilla’s Personal Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <h1>Priscilla Ampiah</h1>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Hi, I'm Priscilla, A CyberSecurity Analyst. As a CyberSecurity Analyst, I am dedicated to protecting systems, networks, and data from cyber threats. My primary focus is on identifying vulnerabilities, assessing risks, and implementing security measures to safeguard organizations against malicious activities. I analyze security breaches, conduct penetration testing, and stay updated on the latest cybersecurity trends to proactively defend against potential attacks. With a strong background in cybersecurity practices and a passion for ensuring the confidentiality, integrity, and availability of information, I strive to contribute to a secure digital environment for businesses and individuals alike. </p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div class="project">
        <h3>Project 1</h3>
        <p>Set Up a small workstation at home with three computers</p>
        <button class="toggle-description">Mini Office set Up</button>
      </div>
      <div class="project">
        <h3></h3>
        <p>Develop a vulnerability scanner tool to identify security vulnerabilities in software and syatems</p>
        <button class="toggle-description">vulnerability scanner</button>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label for="name">Name:priscilla</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email: priscillaaampiah@gmail.com </label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 priscilla. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
