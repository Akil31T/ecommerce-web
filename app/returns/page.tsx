"use client"

import { useState } from "react"
import { ArrowLeft, Package, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ReturnsPage() {
  const [selectedOrder, setSelectedOrder] = useState("")
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [returnReason, setReturnReason] = useState("")
  const [additionalComments, setAdditionalComments] = useState("")

  const eligibleOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: [
        { id: "1", name: "Wireless Headphones", price: 199.99, canReturn: true },
        { id: "2", name: "Phone Case", price: 29.99, canReturn: true },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      items: [{ id: "3", name: "Bluetooth Speaker", price: 149.99, canReturn: true }],
    },
  ]

  const returnReasons = [
    "Defective/Damaged item",
    "Wrong item received",
    "Item not as described",
    "Changed my mind",
    "Size/fit issues",
    "Quality issues",
    "Other",
  ]

  const handleItemSelection = (itemId: string) => {
    setSelectedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const handleSubmitReturn = () => {
    if (!selectedOrder || selectedItems.length === 0 || !returnReason) {
      alert("Please fill in all required fields")
      return
    }

    // Handle return submission
    alert("Return request submitted successfully!")
  }

  const selectedOrderData = eligibleOrders.find((order) => order.id === selectedOrder)
  const selectedItemsData = selectedOrderData?.items.filter((item) => selectedItems.includes(item.id)) || []
  const refundAmount = selectedItemsData.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => window.history.back()} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Orders
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Return Items</h1>
            <p className="text-gray-600 mt-2">Select items you'd like to return and tell us why</p>
          </div>

          <div className="space-y-6">
            {/* Order Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Select Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an order to return items from" />
                  </SelectTrigger>
                  <SelectContent>
                    {eligibleOrders.map((order) => (
                      <SelectItem key={order.id} value={order.id}>
                        {order.id} - {order.date} ({order.items.length} items)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Item Selection */}
            {selectedOrderData && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Items to Return</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedOrderData.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleItemSelection(item.id)}
                          className="w-4 h-4"
                        />
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt={item.name}
                          className="w-15 h-15 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-gray-600">${item.price}</p>
                          {!item.canReturn && <p className="text-red-500 text-sm">Not eligible for return</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Return Reason */}
            {selectedItems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Return Reason</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="reason">Why are you returning these items? *</Label>
                    <Select value={returnReason} onValueChange={setReturnReason}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {returnReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>
                            {reason}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comments">Additional Comments (Optional)</Label>
                    <Textarea
                      id="comments"
                      value={additionalComments}
                      onChange={(e) => setAdditionalComments(e.target.value)}
                      placeholder="Please provide any additional details about your return..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Return Summary */}
            {selectedItems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Return Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-blue-900">Return Policy</p>
                          <p className="text-blue-700">
                            Items must be returned within 30 days of delivery in original condition. Refunds will be
                            processed within 5-7 business days after we receive your return.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Items to return:</span>
                        <span>{selectedItems.length}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Estimated refund:</span>
                        <span>${refundAmount.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button
                      onClick={handleSubmitReturn}
                      className="w-full"
                      disabled={!selectedOrder || selectedItems.length === 0 || !returnReason}
                    >
                      Submit Return Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
