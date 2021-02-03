**When the below tasks have been completed, the dropdown in the toolbar will contain 'stocks', which when selected causes the creation of a tab to represent that selected stock.

With the stocks populated, a service randomly publishes 'trades' across the stocks which appear in grid form for the selected stock tab.**

**Good luck!**

1.  Make stocks appear in the dropdown
    *  See *getStocks*
    *  Delay their return by 2.5secs by applying the **delay** operator at source (we use this delay to simulate a remote call)

    **Now with the list populated, each time a stock's selected, a new tab is created for that stock.**

2.  With the list successfully populated, 'trades' are now being published at random across all stocks.
    *  To prove this, apply the **tap** operator to the **getTradeStream** implementation

3.  In the ActionBar component, display the loading component (LinearProgress/CircularProgress) by setting the *stocksLoading* value:
    *   Handle the GET_STOCKS action (outgoing)
    *   Handle the GET_STOCKS_RESULT action (incoming)    
    
4.  Implement the closing of a tab
    *   Handle the SHEET_CLOSED action
    *   payload is the sheet ID
    *   If the currently selected tab is being closed, then current selection should be changed accordingly

5.  When a tab is selected, using the SheetContainer/Sheet components, display the associated stock's trades:    
    *   The top 10, ordered by time 
    *   See renderSelectedSheet         

*Nice to have if time:*
*  If a sheet already exists for stock, reuse it (select it), instead of creating a new one.