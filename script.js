/* style.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  body {
    line-height: 1.6;
    background: #f4f4f4;
  }
  
  /* Navbar */
  header {
    background: #111827;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10%;
  }
  
  .logo {
    color: #38bdf8;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin-left: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }
  
  .nav-links a:hover {
    color: #38bdf8;
  }
  
  .menu-toggle {
    display: none;
    font-size: 28px;
    cursor: pointer;
  }
  
  /* Hero Section */
  .hero {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(to right, #2563eb, #1e3a8a);
    color: white;
  }
  
  .hero h1 {
    font-size: 50px;
  }
  
  .hero p {
    margin: 15px 0;
    font-size: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background: white;
    color: #2563eb;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .btn:hover {
    background: #ddd;
  }
  
  /* Sections */
  .section {
    padding: 70px 10%;
    text-align: center;
  }
  
  .section h2 {
    margin-bottom: 20px;
    color: #111827;
  }
  
  /* Skills */
  .skill-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .skill-card {
    background: white;
    padding: 20px;
    width: 150px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    font-weight: bold;
  }
  
  /* Projects */
  .project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .project-card {
    background: white;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  }
  
  .project-card h3 {
    margin-bottom: 10px;
  }
  
  /* Footer */
  footer {
    background: #111827;
    color: white;
    text-align: center;
    padding: 15px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
  
    .nav-links {
      display: none;
      flex-direction: column;
      background: #111827;
      position: absolute;
      top: 60px;
      right: 0;
      width: 200px;
      padding: 20px;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .menu-toggle {
      display: block;
    }
  
    .hero h1 {
      font-size: 35px;
    }
  
    .project-card {
      width: 100%;
    }
  }