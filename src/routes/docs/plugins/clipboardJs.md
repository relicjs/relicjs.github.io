<script>
    import { ClipboardButton } from 'relicjs/plugins';
</script>

# Clipboard JS

## Example

<div class="space-y-3">
    <p>The text below will be copied when you click the Copy button</p>
    <div id="text" class="border rounded-lg p-3 bg-gray-50">
        This text will be copied to your clipboard.
    </div>
    <ClipboardButton target="#text" size="sm" success="">Copy</ClipboardButton>
</div>

## Usage

```html
<script>
    import { ClipboardButton } from '$lib/plugins';
</script>

<div id="contentDiv">
    This text will be copied to your clipboard. 
</div>

<ClipboardButton target="#contentDiv" size="sm">Copy</ClipboardButton>
```

## Reference

[https://clipboardjs.com/](https://clipboardjs.com/)
