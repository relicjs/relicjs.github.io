<script context="module">
    export async function load({ page, fetch, session, stuff }) {
		const url = `/docs/menu`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
                    menu: await res.json()
                }
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let menu;
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-12 gap-10">
		<div class="col-span-12 md:col-span-4 xl:col-span-2">
            <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
            {#each menu as item}
                <li class="menu-title">
                    <span class="uppercase">{item.label}</span>
                </li>
                {#each item.submenu as submenu}
                <li>
                    <a href={submenu.route} class="capitalize">{submenu.label}</a>
                </li>
                {/each}
            {/each}
            </ul>
		</div>
		<div class="col-span-12 md:col-span-8 xl:col-span-10 documentation">
			<slot />
		</div>
	</div>
</div>
