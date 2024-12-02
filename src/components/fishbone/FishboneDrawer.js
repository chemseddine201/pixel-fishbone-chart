export class FishboneDrawer {
    constructor() {
        this.topSelector = '.causeAndLine.top-items';
        this.bottomSelector = '.causeAndLine.bottom-items';
        this.causesSelector = '.rootCauses';
        this.lineSelector = '.diagonalLine';
        this.containerSelector = '.cuseContainer';
        this.borderSelector = '.absoluteBorder';
        this.titleContainerSelector = '#effetTitleContainer';
        this.titleSelector = '.effectValue';
        this.topCausesContainerSelector = '.top-group';

    }

    init() {
        this.drawTopItems();
        this.drawBottomItems();
        this.fixTitlePosition();
    }

    drawTopItems() {
        this.processItems(document.querySelectorAll(this.topSelector), false);
    }

    drawBottomItems() {
        this.processItems(document.querySelectorAll(this.bottomSelector), true);
    }

    processItems(items, isBottom) {
        if (!items) return;

        items.forEach(item => {
            const rootCauses = item.querySelector(this.causesSelector);
            const diagonalLine = item.querySelector(this.lineSelector);
            
            if (!rootCauses || !diagonalLine) return;

            const lineWidth = diagonalLine.getBoundingClientRect().width;
            const containers = rootCauses.querySelectorAll(this.containerSelector);
            
            if (!containers) return;

            this.adjustContainerAlignment(rootCauses, containers.length);
            this.positionContainers(containers, lineWidth, isBottom);
        });
    }

    adjustContainerAlignment(rootCauses, itemCount) {
        rootCauses.style.justifyContent = itemCount === 1 ? 'center' : '';
    }

    positionContainers(containers, lineWidth, isBottom) {
        const totalItems = containers.length;
        const isMultipleItems = totalItems > 2;
        const divisor = isMultipleItems ? 2 : 3;

        containers.forEach((container, index) => {
            const itemWidth = container.getBoundingClientRect().width;
            const absoluteBorder = container.querySelector(this.borderSelector);
            
            if (!absoluteBorder) return;

            this.setContainerStyles(container, absoluteBorder, {
                itemWidth,
                lineWidth,
                index,
                totalItems,
                divisor,
                isBottom
            });
        });
    }

    setContainerStyles(container, border, config) {
        const {itemWidth, lineWidth, index, totalItems, divisor, isBottom} = config;

        // Set border styles
        Object.assign(border.style, {
            left: `${itemWidth}px`,
            width: `${lineWidth}px`
        });

        // Calculate position
        let position = 0;
        if (totalItems > 1) {
            position = (index / (totalItems - 1)) * (lineWidth / divisor);
            position = Math.floor(position);
        }

        // Set container position
        Object.assign(container.style, {
            position: 'relative',
            left: isBottom ? 
                `${(lineWidth/2) - position}px` : 
                `${position}px`
        });
    }

    fixTitlePosition() {
        const topCausesContainer = document.querySelector(this.topCausesContainerSelector);
        const title = document.querySelector(this.titleSelector);
        if(!topCausesContainer || !title) return;
        const boundries = topCausesContainer.getBoundingClientRect();
        const titleBoundries = title.getBoundingClientRect();
        
        const yPosition = parseInt(boundries.height - (titleBoundries.height/2));
        title.style.top = `${parseInt(yPosition)}px`;
    }
}