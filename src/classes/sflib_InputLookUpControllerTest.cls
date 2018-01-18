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
@IsTest
private class sflib_InputLookUpControllerTest
{

	private static testMethod void test_search()
	{
		Test.startTest();
		List<SObject> results = sflib_InputLookUpController.searchSObject('Account', '', 'Test');
		Test.stopTest();

		System.assertEquals(true, results.isEmpty(), 'Should return nothing');
	}
}