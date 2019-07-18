<template>
  <div class="the-footer">

    <div class="copyright"> 
      <router-link to="/">
        &copy; SquadTape
      </router-link>
    </div>

    <div class="links">
      
      <div class="link">
        <router-link to="/impressum">
          Impressum
        </router-link>
      </div>

      <div class="link">
        <a href="https://github.com/ayruun/squadtape" target="_blank">GitHub</a>
      </div>

      <div class="link">
        <a href="https://www.aarigato.com" target="_blank">Aarigato</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style>
.the-footer {
  background: url("https://www.aarigato.de/assets/images/background.png");
  background-position: center -270px;
  grid-column: 1 / -1;
  height: 50px;
  margin: 0;
  display: grid;
  grid-template-columns: 5vw repeat(2, 1fr) 5vw;
}

.the-footer a {
    color: var(--primary);
    text-decoration: none;
}

.the-footer a:hover {
    color: var(--hover);
}

.copyright {
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.links {
  grid-column: 3 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.link {
    margin: 0 5px;
}

@media (max-width: 450px) {
    .the-footer {
    font-size: 0.8em;
  }
}

@media (max-width: 374px) {
  .copyright {
    display: none;
  }

  .links {
    grid-column: 2 / 4;
    justify-content: center;
  }
}
</style>
