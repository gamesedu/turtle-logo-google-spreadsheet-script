//beginning of code
function randomNumber_()
{
  return Math.random();
}

function roll_(strCell)
{
  var c;
  try
  {
    c = SpreadsheetApp.getActiveSpreadsheet().getRange(strCell);
    c.setValue(Math.floor(randomNumber_()*6) + 1);
  } catch(e) {Browser.msgBox(e.message);}
}


function rollTheDie()
{
  var theCell;
  var index;
  //var aCells = ["A1","B1","C1","D1","E1","F1","G1"];
  var aCells = ["B2","B3","B4","B5","B6","B7","B9","B10","B12","B13","B14","B15","B16","B17"];
  var sWhich, iWhich;
  try
  {
    
    
    
//++++++++++++++++    
        for (index in aCells)
        {
          theCell = SpreadsheetApp.getActiveSpreadsheet().getRange(aCells[index]);
          //theCell2 = SpreadsheetApp.getActiveSpreadsheet().getRange(board!aCells[index]);
          roll_(aCells[index]);
          
          
          if(index == iWhich - 1)
          {
            theCell.setBackground("blue");
            theCell.setFontColor("white");
            roll_(aCells[iWhich - 1]);
          }
          else
          {
            theCell.setBackground("orange");
            theCell.setFontColor("black");
          }
        }    
    
    
//---------------------

function create_board_manual_(cell,letter) //test NOT ACTAULLY USED
{
  var c;  
  try
  {
    
    var range2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("dice").getRange(cell);
    var cell4=   range2.getValue();
    
    
    c = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("board").getRange(cell4);
    c.setValue(letter);
  } catch(e) {Browser.msgBox(e.message);}
}    
    
//++++++++++++++++CREATE BOARD
     create_board_manual_("C2","G");//
    create_board_manual_("C4","G");//
    create_board_manual_("C6","G");//
    
    create_board_manual_("C9","T");//
    
    create_board_manual_("C12","X");//
    create_board_manual_("C14","X");//
    create_board_manual_("C16","X");//

    //---------------------------

    

  } catch(e) {Browser.msgBox(e.message);}
  
  
}
//end of code
/*
There are some notes about the code above:
1. randomNumber_() is the random number generator. It was made as a separate function in order to allow you to change its code, generating the random number that best fits your needs.
2. The dice cells are hardcoded in the script and can be changed. Just change the array at:
var aCells = ["A1","B1","C1","D1","E1","F1","G1"];

Using the script.
Select Tools -> Script -> Manage.
Select rollTheDie and click Run.

*/
