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
    selectSObject: function (component, event, helper) {
        // get the selected Account from list
        var getSelectSObject = component.get("v.record");
        // call the event
        var compEvent = component.getEvent("oSelectedSObjectEvent");
        // set the Selected Account to the event attribute.
        compEvent.setParams({"sObjectByEvent": getSelectSObject});
        // fire the event
        compEvent.fire();
    }
})