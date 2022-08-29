//Example 1     Numeric enums
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.PENDING)

//Example 2     String enums
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

ArrowKeys.DOWN

//Example 3 - enum heterogeneous
enum StatusOrMessage {
    OK = 200,
    Message = "Success"
}

StatusOrMessage.OK