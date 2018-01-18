/**
 *  This file is part of sflib.
 *
 *  sflib is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License,
 *  or any later version.
 *
 *  sflib is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with sflib.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  @author: Enrico Murru (http://enree.co, @enreeco)
 *  @updatedby: architect William Velzeboer  wim@velzeboer.nl, January 2018
 */
({

    keyPressController: function (component, event, helper) {
        // get the search Input keyword
        var getInputkeyWord = component.get("v.SearchKeyWord");
        // check if getInputKeyWord size id more then 0 then open the lookup result List and
        // call the helper
        // else close the lookup result List part.
        if (getInputkeyWord.length > 0) {
            var forOpen = component.find("searchRes");
            $A.util.addClass(forOpen, 'slds-is-open');
            $A.util.removeClass(forOpen, 'slds-is-close');
            helper.searchHelper(component, event, getInputkeyWord);
        }
        else {
            component.set("v.listOfSearchRecords", null);
            var forclose = component.find("searchRes");
            $A.util.addClass(forclose, 'slds-is-close');
            $A.util.removeClass(forclose, 'slds-is-open');
        }

    },

    // function for clear the Record Selaction
    clear: function (component, event, helper) {

        var pillTarget = component.find("lookup-pill");
        var lookUpTarget = component.find("lookupField");

        $A.util.addClass(pillTarget, 'slds-hide');
        $A.util.removeClass(pillTarget, 'slds-show');

        $A.util.addClass(lookUpTarget, 'slds-show');
        $A.util.removeClass(lookUpTarget, 'slds-hide');

        component.set("v.SearchKeyWord", null);
        component.set("v.listOfSearchRecords", null);
    },

    // This function call when the end User Select any record from the result list.
    handleComponentEvent: function (component, event, helper) {

        // get the selected Account record from the COMPONETN event
        var selectedSOjectGetFromEvent = event.getParam("sObjectByEvent");

        component.set("v.selectedRecord", selectedSOjectGetFromEvent);
        component.set("v.value", selectedSOjectGetFromEvent.Id);

        var forclose = component.find("lookup-pill");
        $A.util.addClass(forclose, 'slds-show');
        $A.util.removeClass(forclose, 'slds-hide');


        var forclose = component.find("searchRes");
        $A.util.addClass(forclose, 'slds-is-close');
        $A.util.removeClass(forclose, 'slds-is-open');

        var lookUpTarget = component.find("lookupField");
        $A.util.addClass(lookUpTarget, 'slds-hide');
        $A.util.removeClass(lookUpTarget, 'slds-show');

    },
    // automatically call when the component is done waiting for a response to a server request.
    hideSpinner: function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({isVisible: false});
        evt.fire();
    },
    // automatically call when the component is waiting for a response to a server request.
    showSpinner: function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({isVisible: true});
        evt.fire();
    },

})