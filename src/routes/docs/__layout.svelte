<!-- <script context="module">
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
</script> -->

<script>
	let menu = [
		// ACTIONS
		[null, '👋 Actions', false],
		// ['/actions/count-up', 'Count Up', true],
		// COMPONENTS
		[null, '🧱 Components', true],
		['components/alert', 'Alert', true],
		['components/badge', 'Badge', true],
		['components/button', 'Button', true],
		//PLUGINS
		[null, '🔌 Plugins', true],
		['plugins/clipboard-js', 'Button', true],
	];
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-12 gap-10">
		<div class="col-span-12 md:col-span-4 xl:col-span-2">
            <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
            {#each menu as [route, label, isNew]}
				{#if !route}
                <li class="menu-title">
                    <span class="uppercase">{label}</span>
                </li>
				{:else}
                <li>
                    <a href={`/docs/${route}`} class="capitalize">{label}</a>
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
