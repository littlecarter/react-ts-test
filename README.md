**When the below tasks are complete, the dropdown in the toolbar will contain names of stocks, which when selected cause the creation of a tab to represent that selected stock.  The tab when selected will display the top 10 most recent 'trades' in grid form.**

1.  Make stocks appear in the dropdown
    *  Implement *getStocks*
    *  Delay their return by 2.5secs by applying the **delay** operator (we use this delay to simulate a remote call)

2.  With the list successfully populated, 'trades' are now being published at random across all stocks
    *  To prove this, apply the **tap** operator to the **getTradeStream** implementation, and output the trade to the console

3.  Get the stocks loading component to show in the ActionBar by setting the *stocksLoading* value in the reducer
    *   Handle the GET_STOCKS action (outgoing)
    *   Handle the GET_STOCKS_RESULT action (incoming)
    
4.  Implement the closing of a tab
    *   Handle the SHEET_CLOSED action
    *   If the currently selected tab is being closed, then current selection should be changed accordingly e.g. to the adjacent tab

5.  When a tab is selected, using the SheetContainer/Sheet components, display the associated stock's trades
    *   The top 10, ordered by time 
    *   See renderSelectedSheet         