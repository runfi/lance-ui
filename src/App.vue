<template>
    <div id="app" class="page-wrapper c-normal">
        <div class="header-wrapper">
            <div class="logo"></div>

            <div class="btns c-size-m">
                <router-link class="link" to="/">首页</router-link>
                <a href="http://zongyao.life/profile" target="_blank" class="link">作者简介</a>
            </div>
        </div>

        <la-scroll-view class="nav-sidebar-wrapper">
            <ul>
                <li>
                    <router-link class="nav-sidebar-item c-size-l" to="/">首页</router-link>
                </li>

                <li class="nav-sidebar-item c-size-l c-bold">组件</li>

                <li v-for="(elem, key) in routers" :key="key">
                    <div>
                        <h5 class="nav-sidebar-item c-size-m is-hint">{{ key }}</h5>
                        <ul>
                            <li v-for="(item, index) in elem" :key="index">
                                <router-link class="nav-sidebar-subitem c-size-s" :to="item.path">{{ item.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </la-scroll-view>

        <router-view class="content-wrapper" />
    </div>
</template>

<script>
const context = require.context("@/components/", true, /demo\.vue$/);
// const routers = {
//     common: ["button", "icon", "file-reader", "hover-tip", "dropdown"],
//     form: ["slider", "radio-group", "input", "input-number", "select", "date-picker", "checkbox-group"],
//     notice: ["message-box", "toast", "message"],
//     navigation: ["tabs", "breadcrumb", "scroll-view"],
//     data: ["table", "pagination"],
// };
const routers = {
    common: ["button", "icon"],
    navigation: ["scroll-view"],
};
context.keys().forEach(url => {
    const start = url.indexOf("/");
    const end = url.lastIndexOf("/");
    const name = url.substring(start + 1, end);
    const path = `/${name}`;

    Object.keys(routers).forEach(key => {
        const arr = routers[key];
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            if (element === name.toLowerCase()) {
                arr[index] = {
                    name,
                    path,
                };
                break;
            }
        }
    });
});

export default {
    name: "App",
    data() {
        return {
            routers,
        };
    },
};
</script>

<style lang="scss">
.page-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #fafafa;

    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        height: 30px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444b57;
        background: #fff;
        .logo {
            width: 100px;
            height: 20px;
            background: url(/static/img/logo.png);
            background-size: cover;
        }
        .btns {
            display: flex;
            justify-content: space-evenly;
            width: 200px;
            .link {
                text-decoration: none;
            }
        }
    }

    .nav-sidebar-wrapper {
        position: fixed;
        top: 45px;
        left: 15px;
        display: flex;
        flex-direction: column;
        width: 240px;
        height: 90%;

        background: #fff;
        border-radius: 4px;

        .nav-sidebar-subitem,
        .nav-sidebar-item {
            display: inline-flex;
            box-sizing: border-box;
            width: 100%;
            padding: 0 32px;
            align-items: center;
            min-height: 40px;
            text-decoration: none;
            color: #444b57;
            &.router-link-exact-active {
                position: relative;
                color: #4d94e6;
                background: #f1f8ff;
                &::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 2px;
                    height: 100%;
                    content: "";
                    background: #4ca0fa;
                }
            }
            &.is-hint {
                color: #a5a5a5;
            }
        }
        .nav-sidebar-item:first-child,
        .nav-sidebar-subitem {
            &:not(.is-hint):hover {
                color: #4d94e6;
                background: #f1f8ff;
            }
        }
        .nav-sidebar-subitem {
            padding: 0 48px;
        }
    }

    .content-wrapper {
        position: fixed;
        top: 30px;
        left: 286px;
        right: 36px;
        bottom: 0;
        margin: 16px 0;
        background: #fff;
        border-radius: 4px;
    }
}
</style>
