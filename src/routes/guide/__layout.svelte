<script>
	export let menu = [
        [null, '🚀 Getting Started'],
        ['/guide/installation', 'Installation'],
        ['/guide/usage', 'Usage'],
    ]
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-12 gap-10">
		<div class="col-span-12 md:col-span-4 xl:col-span-2">
            <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
            {#each menu as [route, label]}
                {#if route}
                <li>
                    <a class="capitalize" href={route}>{label}</a>
                </li>
                {:else}
                <li class="menu-title">
                    <span class="uppercase">{label}</span>
                </li>
                {/if}
                {/each}
            </ul>
		</div>
		<div class="col-span-12 md:col-span-8 xl:col-span-10 documentation">
			<slot />
		</div>
	</div>
</div>
