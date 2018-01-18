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
    searchHelper: function (component, event, getInputkeyWord) {
        // call the apex class method
        var action = component.get("c.searchSObject");
        // set param to method
        action.setParams({
            'type': component.get("v.type"),
            'filter': component.get("v.filter"),
            'searchString': getInputkeyWord
        });
        // set a callBack
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                // if storeResponse size is equal 0 ,display No Result Found... message on screen.
                if (storeResponse.length == 0) {
                    component.set("v.Message", 'No Result Found...');
                } else {
                    component.set("v.Message", 'Search Result...');
                }

                // set searchResult list with return value from server.
                component.set("v.listOfSearchRecords", storeResponse);
            }

        });
        // enqueue the Action
        $A.enqueueAction(action);

    },
})