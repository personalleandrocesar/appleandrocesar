<template>
    <div class='nav logoAnimationNav'>
        <div>
              <div>
                  <a @click="$router.go(-1)">            <Icon name="tabler:arrow-big-left-line-filled" />
  </a>
              </div>
              <div>
                  <a href="https://webapp.leandrocesar.com" target="_blank"><Icon name="solar:login-3-bold" /></a>
              </div>
          </div>
    </div>

</template>
<style scoped>
.nav
{
  height: 35px;
  position: sticky;
  top: -1px;
  background-color: var(--color-background);    
  border-radius: 0% 0% 10% 10%;
  z-index: 10;
  box-shadow: 0px .5px 5px #fadb4140;
}

.nav
 div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;

}

.nav
 a{
  cursor: pointer;
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.4em;
}

.nav a:hover {
  background-color: transparent;
  color: #fadb41;
}
.nav
 .svg-inline--fa {
  color: #aaa;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.nav
 .svg-inline--fa:hover {
  color: #fadb41;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>
