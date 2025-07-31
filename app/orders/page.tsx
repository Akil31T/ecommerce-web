"use client"

import { useState } from "react"
import { Package, Truck, CheckCircle, Clock, ArrowLeft, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 299.99,
      items: [
        { name: "Wireless Headphones", price: 199.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
        { name: "Phone Case", price: 29.99, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
      ],
      tracking: "TRK123456789",
      deliveryDate: "2024-01-18",
      canReturn: true,
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: 149.99,
      items: [{ name: "Bluetooth Speaker", price: 149.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" }],
      tracking: "TRK987654321",
      estimatedDelivery: "2024-01-25",
      canReturn: false,
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "Processing",
      total: 89.99,
      items: [
        { name: "USB Cable", price: 19.99, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
        { name: "Wireless Charger", price: 49.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
      ],
      canReturn: false,
    },
  ]

  const returns = [
    {
      id: "RET-001",
      orderId: "ORD-001",
      date: "2024-01-20",
      status: "Approved",
      reason: "Defective item",
      refundAmount: 199.99,
      item: "Wireless Headphones",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing":
        return <Clock className="h-4 w-4" />
      case "Shipped":
        return <Truck className="h-4 w-4" />
      case "Delivered":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "outline"
      case "Shipped":
        return "secondary"
      case "Delivered":
        return "default"
      default:
        return "outline"
    }
  }

  if (selectedOrder) {
    const order = orders.find((o) => o.id === selectedOrder)
    if (!order) return null

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" onClick={() => setSelectedOrder(null)} className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Button>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Order {order.id}</CardTitle>
                      <p className="text-gray-600">Placed on {order.date}</p>
                    </div>
                    <Badge variant={getStatusColor(order.status)} className="w-fit">
                      {getStatusIcon(order.status)}
                      <span className="ml-2">{order.status}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Order Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>${order.total}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping:</span>
                          <span>Free</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${order.total}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Info</h3>
                      <div className="space-y-1 text-sm">
                        {order.tracking && (
                          <p>
                            <span className="font-medium">Tracking:</span> {order.tracking}
                          </p>
                        )}
                        {order.deliveryDate && (
                          <p>
                            <span className="font-medium">Delivered:</span> {order.deliveryDate}
                          </p>
                        )}
                        {order.estimatedDelivery && (
                          <p>
                            <span className="font-medium">Est. Delivery:</span> {order.estimatedDelivery}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Items Ordered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-gray-600">Quantity: {item.quantity}</p>
                          <p className="font-semibold">${item.price}</p>
                        </div>
                        {order.canReturn && (
                          <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Return Item
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <p className="text-gray-600 mt-2">Track and manage your orders</p>
          </div>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList>
              <TabsTrigger value="orders">All Orders</TabsTrigger>
              <TabsTrigger value="returns">Returns & Refunds</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-lg">{order.id}</h3>
                            <Badge variant={getStatusColor(order.status)}>
                              {getStatusIcon(order.status)}
                              <span className="ml-2">{order.status}</span>
                            </Badge>
                          </div>
                          <p className="text-gray-600">
                            {order.date} • {order.items.length} items
                          </p>
                          <p className="font-semibold text-lg">${order.total}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline" onClick={() => setSelectedOrder(order.id)}>
                            View Details
                          </Button>
                          {order.status === "Delivered" && order.canReturn && (
                            <Button variant="outline">
                              <RotateCcw className="h-4 w-4 mr-2" />
                              Return Items
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="returns">
              <div className="space-y-4">
                {returns.map((returnItem) => (
                  <Card key={returnItem.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-lg">{returnItem.id}</h3>
                            <Badge variant="default">{returnItem.status}</Badge>
                          </div>
                          <p className="text-gray-600">Order: {returnItem.orderId}</p>
                          <p className="text-gray-600">Item: {returnItem.item}</p>
                          <p className="text-gray-600">Reason: {returnItem.reason}</p>
                          <p className="font-semibold">Refund: ${returnItem.refundAmount}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Requested on</p>
                          <p className="font-semibold">{returnItem.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
