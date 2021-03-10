<template>
  <div class="main-header">
    <div class="navbar">
      <NuxtLink to="/">
        <div class="logo">{{ $t('title') }}</div>
      </NuxtLink>
      <div class="menu-right">
        <div class="menu">
          <NuxtLink to="/">{{ $t('navbarHome') }}</NuxtLink>
          <NuxtLink to="/blog">{{ $t('navbarBlog') }}</NuxtLink>
          <NuxtLink to="/about">{{ $t('navbarAbout') }}</NuxtLink>
          <NuxtLink to="/work">{{ $t('navbarWork') }}</NuxtLink>
          <LangSwitcher />
        </div>
      </div>   
    </div>
  </div>
</template>

<style scoped>
.menu-right {
  display: flex;
  align-items: center;
}
.main-header {
  border-bottom: var(--bottom);
}
.navbar {
  height: 112px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.logo {
  font-weight: 400;
  font-size: 38px;
  color: var(--primary);
  text-transform: uppercase;
}
.menu {
  width: 525px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 992px) {
  .navbar {
    height: 90px;
  }
  .logo {
    font-size: 32px;
  }
}
a {
  text-decoration: none;
  color: var(--item);
  font-size: 22px;
  font-weight: 300;
}
a.nuxt-link-exact-active {
  color: var(--primary);
  font-weight: 400;
}
</style>
