<script>
    import { Alert, CodeSnippet, Icon } from 'relicjs/components';
</script>

<h1>Alert</h1>

<h2>Example</h2>

<div class="space-y-3">
    <div class=" alert alert-default"><div class="flex-1"><svg class="inline-block text-info s-VZhAxRCNhlSl" style="width:24px;height:24px;" viewBox="0 0 24 24"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" class="s-VZhAxRCNhlSl"></path></svg><!--<Icon>--> <div class="mx-2"><h4>Lorem ipsum dolor sit amet, consectetur adip!</h4> </div></div> </div>
        
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
