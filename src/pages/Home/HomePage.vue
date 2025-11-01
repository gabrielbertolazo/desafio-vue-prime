<template>
    <main class="m-8 flex flex-col home-page items-center">
        <h1 class="text-3xl font-bold underline">Welcome to the Home Page</h1>
        <p class="text-center">This is the main landing page of the application.</p>

        <RouterLink
            to="/settings"
            class="w-fit mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Open Settings Page
        </RouterLink>
    </main>
</template>