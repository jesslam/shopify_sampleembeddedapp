// Destructured state 
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    // SettingToggle Polaris component
    SettingToggle,
    Stack,
    TextField,
    TextStyle,

} from '@shopify/polaris';
class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%',
    };

    render() {

        const { discount, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';

        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                    title = "Default discount"
                    description = "Add a product to Sample App, it'll be automatically discounted.">
                    <Card sectioned>
                        {/* Add form using Polaris form component including handleChange */}
                        <Form onSubmit = {this.handleSubmit} >
                            <FormLayout>
                                <TextField
                                    value = {discount}
                                    onChange = {this.handleChange('discount')}
                                    label = "Discount percentage"
                                    type = "discount" />
                                <Stack distribution = "trailing">
                                    <Button primary submit>
                                        Save
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card>
                    </Layout.AnnotatedSection>
                    {/* Add settings toggle using Polaris Setting Toggle component*/}
                    <Layout.AnnotatedSection
                    title = "Price updates"
                    description = "Temporarily disable all Sample App price updates">
                    <SettingToggle
                    action = {{
                        content: contentStatus,
                        onAction: this.handleToggle
                    }}
                    enabled = {enabled}>
                        This setting is {' '}
                        <TextStyle variation = "strong">{textStatus}</TextStyle>.
                    </SettingToggle>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        );
    }

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount,
        });
        console.log('submission', this.state);
    };

    handleChange = (field) => {
        return (value) => this.setState({ [field]: value });
    };

    handleToggle = () => {
        this.setState(({ enabled }) => {
            return { enabled : !enabled };
        });
    };
}

export default AnnotatedLayout;