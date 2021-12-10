<script>
    import { ClipboardButton } from 'relicjs/plugins';
    import { CodeSnippet } from 'relicjs/components';
</script>

<h1>Clipboard JS</h1>

<h2>Example</h2>

<div class="space-y-3">
    <p>The text below will be copied when you click the Copy button</p>
    <div id="text" class="border rounded-lg p-3 bg-gray-50">
        This text will be copied to your clipboard.
    </div>
    <ClipboardButton target="#text" size="sm" success="">Copy</ClipboardButton>
</div>

<h2>Usage</h2>

<CodeSnippet>
{`<script>
    import { ClipboardButton } from '$lib/plugins';
</script>

<div id="contentDiv">
    This text will be copied to your clipboard. 
</div>

<ClipboardButton target="#contentDiv" size="sm">Copy</ClipboardButton>
`}
</CodeSnippet>

<h2>Reference</h2>

<a href="https://clipboardjs.com/">https://clipboardjs.com</a>
