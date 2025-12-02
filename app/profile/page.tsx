"use client"

import { useState } from "react"
import { User, Package, Heart, Settings, LogOut, Edit, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"


export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
  })

  const recentOrders = [
    { id: "ORD-001", date: "2024-01-15", status: "Delivered", total: 299.99, items: 3 },
    { id: "ORD-002", date: "2024-01-10", status: "Shipped", total: 149.99, items: 1 },
    { id: "ORD-003", date: "2024-01-05", status: "Processing", total: 89.99, items: 2 },
  ]

  const favoriteItems = [
    { id: "1", name: "Wireless Headphones", price: 199.99, image: "/placeholder.svg?height=100&width=100", quantity: 2 },
    { id: "2", name: "Smart Watch", price: 299.99, image: "/placeholder.svg?height=100&width=100", quantity: 1 },
    { id: "3", name: "Bluetooth Speaker", price: 149.99, image: "/placeholder.svg?height=100&width=100", quantity: 3 },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
            <p className="text-gray-600 mt-2">Manage your account settings and view your activity</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Personal Information</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                      >
                        {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                        {isEditing ? "Save" : "Edit"}
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <Input
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <Input
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                          <Input
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Orders</span>
                        <span className="font-semibold">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Spent</span>
                        <span className="font-semibold">$1,299.99</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Favorite Items</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Member Since</span>
                        <span className="font-semibold">Jan 2024</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="space-y-1 sm:space-y-0">
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">{order.id}</span>
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : order.status === "Shipped"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {order.date} • {order.items} items
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 sm:mt-0">
                          <span className="font-semibold">${order.total}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = `/orders/${order.id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>My Favorites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {favoriteItems.map((item) => (
                      <FavoriteItem key={item.id} item={item} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Email Preferences
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Privacy Settings
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

    </div>
  )
}

type FavoriteItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};


function FavoriteItem({ item }: { item: FavoriteItemType }) {
  const [quantity, setQuantity] = useState(item.quantity)

  const updateQuantity = (change: number) => {
    const newQuantity = Math.max(0, quantity + change)
    setQuantity(newQuantity)
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg">
      {/* <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover rounded" /> */}
      <div className="flex-1 space-y-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-lg font-bold text-gray-900">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => updateQuantity(-1)}>
          -
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button variant="outline" size="sm" onClick={() => updateQuantity(1)}>
          +
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size="sm">Add to Cart</Button>
        <Button variant="outline" size="sm">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
