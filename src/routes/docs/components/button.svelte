<script>
    import { Button, CodeSnippet } from 'relicjs/components';
</script>

<h1>Button</h1>

<h2>Example</h2>

<div class="space-y-3">
    <div class="space-x-2">
        <Button color="default">default</Button>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="accent">accent</Button>
        <Button color="ghost">ghost</Button>
    </div>
</div>

<h2>Usage</h2>

<CodeSnippet>
{`<script>
    import Badge from '$lib/components/Badge.svelte';
</script>

<Badge color="neutral">neutral</Badge>
<Badge color="primary">primary</Badge>
<Badge color="secondary">secondary</Badge>
<Badge color="accent">accent</Badge>
<Badge color="ghost">ghost</Badge>
`}
</CodeSnippet>

<h2>Reference</h2>

<a href="https://daisyui.com/components/button">https://daisyui.com/components/button</a>
