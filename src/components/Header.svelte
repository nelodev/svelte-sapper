<style>
  .header {
    background-color: #fafbfc;
    color: #191a22;
    padding: 1em 0 0 0;
  }

  .header-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    color: #191a22;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: pointer;
  }

  .header h1 span {
    display: block;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: normal;
    margin: 0.3em 0 0 0;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .header li {
    display: inline-block;
    margin: 0 0.5em 0 0;
  }

  .header a {
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
  }

  .header-social img {
    width: 20px;
  }
</style>

<header class="header">
  <div class="header-container">
    <div class="header-content">
      <div class="header-logo">
        <h1>
          Nelodev
          <span>Fullstack Engineer at Finametrix</span>
        </h1>
      </div>
      <div class="header-social">
        <ul>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="github-icon.png" alt="GitHub">
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="facebook-icon.png" alt="Twitter">
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="instagram-icon.png" alt="Instagram">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>