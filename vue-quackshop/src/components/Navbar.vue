<template>
    <div>
        <b-navbar id="navbar" toggleable="lg" type="dark" variant="dark">
            
            <b-navbar-brand to="/">QuackShop</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/about">About</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ms-auto">

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/register">Register</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>