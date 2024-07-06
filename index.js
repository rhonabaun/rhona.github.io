<script>
        var products = [
        { id: 1, name: "SKINCARE BEAUTY BAR SYRUM", price: 3,150.00 },
        { id: 2, name: "SKINCARE BEATY BAR EYE SERUM", price: 3,150.00 },
        { id: 3, name: "SKINCARE BEAUTY BAR FACIAL MASK", price: 895.00 },
        { id: 4, name: "SKINCARE BEAUTY BAR FOUNDATION", price: 1,200.00 },
        { id: 5, name: "SKINCARE BEAUTY BAR CLEANSING OIL", price: 695.00 },
        { id: 6, name: "SKINCARE BEAUTY BAR SLEEPING FACIAL MASK", price: 895.00 },
    ];
    
    
    var qtyInputs = document.querySelectorAll('[id^="qty"]');
    var carts = document.getElementById("carts");
    var totalInput = document.getElementById("total");
    var cashInput = document.getElementById("cash");
    var changeInput = document.getElementById("change");
    
    
    qtyInputs.forEach(function(qtyInput) {
        qtyInput.addEventListener("input", addOrder);
    });
    
    cashInput.addEventListener("input", calculateChange);
    
    
    function addOrder() {
        carts.textContent = ""; // Clear previous cart content
    
        var total = 0;
    
        qtyInputs.forEach(function(qtyInput, index) {
            var qty = parseFloat(qtyInput.value);
            if (qty > 0) {
                var product = products[index];
                var order = qty + " pcs x " + product.name + " - Php " + (qty * product.price).toFixed(2) + "\n";
                carts.textContent += order;
                total += qty * product.price;
            }
        });
    
        totalInput.value = total.toFixed(2); // Update total
        calculateChange(); // Recalculate change
    }
    
    
    function calculateChange() {
        var total = parseFloat(totalInput.value);
        var cash = parseFloat(cashInput.value);
    
        if (!isNaN(total) && !isNaN(cash)) {
            var change = cash - total;
            changeInput.value = change.toFixed(2);
        } else {
            changeInput.value = "";
        }
    }
      </script>
