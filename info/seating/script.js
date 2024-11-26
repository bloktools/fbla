document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat.available');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('occupied')) {
                seat.classList.toggle('selected');
            }
        });
    });
});
