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
public with sharing class sflib_InputLookUpController
{
	/*
     * Searches (using SOSL) for a given Sobject type
     */
	@AuraEnabled
	public static List<SObject> searchSObject(String type, String filter, String searchString)
	{
		if (String.isBlank(type) || String.isBlank(searchString))
		{
			return null;
		}

		SObjectType objType = Schema.getGlobalDescribe().get(type);
		if (objType == null)
		{
			return null;
		}

		String nameField = getSobjectNameField(objType);
		searchString = '\'*' + searchString + '*\'';
		String whereString = '';
		if (String.isNotBlank(filter))
		{
			whereString = ' WHERE '+filter;
		}
		String soslQuery = 'FIND :searchString IN NAME FIELDS RETURNING '
				+ type + '(Id, ' + nameField + whereString + ' ORDER BY ' + nameField + ') LIMIT 20';
		System.debug('SOSL QUERY: ' + soslQuery);
		List<List<SObject>> results = Search.query(soslQuery);

		if (results.size() > 0)
		{
			return results[0];
		}
		else
		{
			return new List<SObject>();
		}
	}


	/*
	 * Returns the "Name" field for a given SObject (e.g. Case has CaseNumber, Account has Name)
	 */
	private static String getSobjectNameField(SobjectType sObjectType)
	{

		//describes lookup obj and gets its name field
		String nameField = 'Name';
		Schema.DescribeSObjectResult dfrLkp = sObjectType.getDescribe();
		for (schema.SObjectField sotype : dfrLkp.fields.getMap().values())
		{
			Schema.DescribeFieldResult fieldDescObj = sotype.getDescribe();
			if (fieldDescObj.isNameField())
			{
				nameField = fieldDescObj.getName();
				break;
			}
		}
		return nameField;
	}
}