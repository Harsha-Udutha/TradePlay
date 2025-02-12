document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("date-listed").addEventListener("change", function() {
        const selectedValue = this.value;
        const listings = document.querySelectorAll(".listing"); 

        const today = new Date();
        const lastWeek = new Date();
        lastWeek.setDate(today.getDate() - 7);
        const lastMonth = new Date();
        lastMonth.setMonth(today.getMonth() - 1);

        listings.forEach(listing => {
            const postDate = new Date(listing.getAttribute("data-date")); // Get post date from attribute

            let shouldDisplay = false;

            if (selectedValue === "today" && postDate.toDateString() === today.toDateString()) {
                shouldDisplay = true;
            } else if (selectedValue === "last-week" && postDate >= lastWeek) {
                shouldDisplay = true;
            } else if (selectedValue === "last-month" && postDate >= lastMonth) {
                shouldDisplay = true;
            }

            listing.style.display = shouldDisplay ? "block" : "none";
        });
    });
});
