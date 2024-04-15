<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Priscilla Ampiah - Personal Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Priscilla</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Hi, I'm Priscilla, A CyberSecurity Analyst. As a CyberSecurity Analyst, I am dedicated to protecting systems, networks, and data from cyber threats. My primary focus is on identifying vulnerabilities, assessing risks, and implementing security measures to safeguard organizations against malicious activities. I analyze security breaches, conduct penetration testing, and stay updated on the latest cybersecurity trends to proactively defend against potential attacks. With a strong background in cybersecurity practices and a passion for ensuring the confidentiality, integrity, and availability of information, I strive to contribute to a secure digital environment for businesses and individuals alike.</p>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <button id="toggleButton">Toggle Project Descriptions</button>
            <ul>
                <li>
                    <h3>Project 1</h3>
                    <p class="project-description hidden">Describe your first project here.</p>
                </li>
                <li>
                    <h3>Project 2</h3>
                    <p class="project-description hidden">Describe your second project here.</p>
                </li>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label for="name">Name:Priscilla</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:priscillaaampiah@gmail.com</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; Priscilla</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
