<script>
    import { Alert, CodeSnippet, Icon } from 'relicjs/components';
</script>

<h1>Alert</h1>

<h2>Example</h2>

<div class="space-y-3">
    <Alert icon="informationOutline" iconColor="info" type="default">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

    <Alert icon="informationOutline" iconColor="info" type="info">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

    <Alert icon="folderOutline" iconColor="success" type="success">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

    <Alert icon="alertOutline" iconColor="warning" type="warning">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

    <Alert icon="cancel" iconColor="error" type="error">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
</div>

<h2>Usage</h2>

<CodeSnippet>
{`<script>
    import Alert from '$lib/components/Alert.svelte';
</script>

<!-- Default -->
<Alert icon="informationOutline" iconColor="info" type="default">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

<!-- Info -->
<Alert icon="informationOutline" iconColor="info" type="info">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

<!-- Success -->
<Alert icon="folderOutline" iconColor="success" type="success">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

<!-- Warning -->
<Alert icon="alertOutline" iconColor="warning" type="warning">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

<!-- Error -->
<Alert icon="cancel" iconColor="error" type="error">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
`}
</CodeSnippet>

<h2>Reference</h2>

<a href="https://daisyui.com/components/alert">https://daisyui.com/components/alert</a>
