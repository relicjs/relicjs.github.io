<script>
    import { Alert, Button, Icon } from 'relicjs/components'
</script>

<div class="prose">

# Usage

You can easily import any components from RelicJS and start using it right away in your Sveltekit project:

```html
<script>
    import { Alert } from 'relicjs/components'
</script>

<Alert type="success" icon="check" iconColor="success">
    Your password has been updated successfully updated!
</Alert>
```

Which results in:

<Alert type="success" icon="check" iconColor="success">
    Your password has been updated successfully updated!
</Alert>

You can also compose your component using multiuple RelicJS components as well:

```html
<script>
    import { Button, Icon } from 'relicjs/components'
</script>

<Button outline color="success">
    <Icon name="contentSave" color="white" />
    <span class="pl-2">Click me</span>
</Button>
```

And that will give you the following result:

<Button color="success">
    <Icon name="contentSave" color="white" />
    <span class="pl-2">Click me</span>
</Button>

</div>