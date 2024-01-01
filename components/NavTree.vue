<template>
    <div class='nav logoAnimationNav'>
        <div>
            <a @click="$router.go(-1)">
                <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
            </a>
        </div>
    </div>
</template>
<style scoped>
.nav {
    position: sticky;
    top: 1.5rem;
    margin: 1.5rem;
}

.nav a {
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: var(--color-text);
    line-height: 4px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 16px;
    padding-inline: 8px;
    padding-top: 7px;
    padding-bottom: 8px;
    backdrop-filter: blur(15px);
    background-color: #ffffff90;
}

.nav a .icon {
    margin-top: -1px;
    margin-left: -4px;
    margin-right: -2px;
}

.nav a:hover {
    background-color: #095D6210;
}

.nav:hover a {
    color: #095D6280;
}

.nav div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}</style>
