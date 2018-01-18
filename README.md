# sflib-InputLookUp
A Salesforce Lightning input field that adds a Lookup-field to any SObject in Salesforce

**Dependencies:** 
Must deploy [ApexMocks](https://github.com/wimvelzeboer/fflib-apex-mocks-plus) and [ApexCommons](https://github.com/wimvelzeboer/fflib-apex-common-plus) before deploying this library

<a href="https://githubsfdeploy.herokuapp.com?owner=wimvelzeboer&repo=sflib-InputLookUp">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>

## Donate
Please do not forget to make a donation when you find this tool useful. Much appreciated!
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H4L2B682AHSKW">
    <img alt="Donate"
         src="donate.gif" />
</a>

## Credits
This code is originally written by Enrico Murru (http://enree.co, @enreeco), but I found that it needed some external dependencies, while this component is 100% based on Salesforce Lightning. 


## Example
This example will display an input field of a lookup type to the User SObject, and will filter on only active users with a Salesforce license.
        
        <aura:attribute access="private" name="userId" type="String" default=""/>
        
        <div class="slds-form-element">
            <div class="slds-form-element__control">
                <label class="slds-form-element__label">Select User:</label>
                <c:sflib_InputLookup type="User" value="{!v.userId}" filter="isActive=true AND Profile.UserLicense.Name='Salesforce'" />
            </div>
        </div>

</code>