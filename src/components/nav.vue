<template>
  <div id="navigation-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand>
          <router-link to="/" class="logo">Thai Dessert</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/" class="navMenuHome">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/Cart" class="navMenuCart">Cart</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto shearch">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
 
<script>
export default {
  name: "Navigation-Bar",
};
</script>

<style>
.logo {
  color: #fff;
}
.logo:hover {
  color: #fff;
  text-decoration: none;
}
.navMenuHome {
  color: #fff;
  border-bottom: 2px solid transparent;
  padding-bottom: 20px;
  transition: all 0.3s ease;
}
.navMenuHome:hover {
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  padding-bottom: 0px;
}
.navMenuCart {
  color: #fff;
  border-bottom: 2px solid transparent;
  padding-bottom: 20px;
  transition: all 0.3s ease;
}
.navMenuCart:hover {
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  padding-bottom: 0px;
}
</style>