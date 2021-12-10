<script>
    import { Alert, Button, Icon, CodeSnippet } from 'relicjs/components';
</script>

<h1>Usage</h1>

<p>You can easily import any components from RelicJS and start using it right away in your Sveltekit project:</p>

<CodeSnippet>
{`<script>
    import { Alert } from 'relicjs/components'
</script>

<Alert type="success" icon="check" iconColor="success">
    Your password has been updated successfully updated!
</Alert>`}
</CodeSnippet>

<p>Which results in:</p>

<Alert type="success" icon="check" iconColor="success">
    Your password has been updated successfully updated!
</Alert>

<p>You can also compose your component using multiuple RelicJS components as well:</p>

<CodeSnippet>
{`<script>
    import { Button, Icon } from 'relicjs/components'
</script>

<Button outline color="success">
    <Icon name="contentSave" color="white" />
    <span class="pl-2">Click me</span>
</Button>`}
</CodeSnippet>

<p>And that will give you the following result:</p>

<Button color="success">
    <Icon name="contentSave" color="white" />
    <span class="pl-2">Click me</span>
</Button>