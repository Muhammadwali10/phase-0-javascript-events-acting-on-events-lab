const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    if (!dodger) return;

    let currentLeft = parseInt(dodger.style.left, 10) || 0;
    const moveStep = 10;
    const newLeft = Math.min(currentLeft + moveStep, 360);

    dodger.style.left = `${newLeft}px`;
}

describe('moveDodgerRight()', () => {
    beforeEach(() => {
        dodger = document.getElementById('dodger')
    })

    it('moves the DODGER to the right (within boundary)', () => {
        let left = dodger.style.left;
        left = parseInt(left);

        moveDodgerRight();

        let newPosition = dodger.style.left;
        newPosition = parseInt(newPosition);

        expect(newPosition).to.be.above(left);
    })

    it('does not move beyond the right boundary', () => {
        dodger.style.left = '350px';
        moveDodgerRight();
        const newPosition = parseInt(dodger.style.left);
        expect(newPosition).to.equal(360);
    })
});