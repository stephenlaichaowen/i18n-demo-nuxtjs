<template>
  <div>
    <Navbar />
    <Nuxt class="style" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #278f6e;
  --item: #707070;
  --subtitle: #313131;
  --bottom: 1px solid #efefef;
  --brDefault: 30px;
}

.style {
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'Rubik', sans-serif;
  background: var(--bg-color);
}

h1 {
  color: var(--item);
}
</style>
