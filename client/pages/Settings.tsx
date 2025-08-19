import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
  Users,
  Shield,
  Plus,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const placeholderList = [
  {
    id: 1,
    text: "Ad Placeholder",
    subtitle: "http://www.linkedin.com/in/username",
  },
  {
    id: 2,
    text: "Ad Placeholder",
    subtitle: "ad@linksincommune.school.program.childcare",
  },
  {
    id: 3,
    text: "Ad Placeholder",
    subtitle: "ad@linksincommune.school.program.childcare",
  },
  {
    id: 4,
    text: "Ad Placeholder",
    subtitle: "ad@linksincommune.school.program.childcare",
  },
  {
    id: 5,
    text: "Ad Placeholder",
    subtitle: "ad@linksincommune.school.program.childcare",
  },
  {
    id: 6,
    text: "Ad Placeholder",
    subtitle: "ad@linksincommune.school.program.childcare",
  },
  {
    id: 7,
    text: "Ad Placeholder",
    subtitle: "ad@linksincommune.school.program.childcare",
  },
];

export default function Settings() {
  const [parentInfo, setParentInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredLanguage: "English",
    address: "",
  });

  const [contactPreferences, setContactPreferences] = useState({
    preferredChannel: "Email",
    preferredTime: "Morning",
  });

  const [visibilitySettings, setVisibilitySettings] = useState({
    letSchoolsFind: false,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 bg-purple-400 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-black mb-6">Settings</h2>
          <nav className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-md text-sm font-medium bg-black text-purple-500">
              Parent Settings
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/10">
              School Administrator Settings
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/10">
              Teacher Settings
            </button>
          </nav>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-black mb-4">
              Account Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-md text-sm text-black hover:bg-black/10">
                Download My Data
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md text-sm text-black hover:bg-black/10">
                Delete My Account
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">
              KidsQueue Settings
            </h1>
          </div>

          <div className="space-y-8">
            {/* Parent Information */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Parent Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-purple-900">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={parentInfo.fullName}
                      onChange={(e) =>
                        setParentInfo({
                          ...parentInfo,
                          fullName: e.target.value,
                        })
                      }
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-900">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={parentInfo.email}
                      onChange={(e) =>
                        setParentInfo({ ...parentInfo, email: e.target.value })
                      }
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-purple-900">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={parentInfo.phone}
                      onChange={(e) =>
                        setParentInfo({ ...parentInfo, phone: e.target.value })
                      }
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-purple-900">
                      Preferred Language
                    </Label>
                    <Select
                      value={parentInfo.preferredLanguage}
                      onValueChange={(value) =>
                        setParentInfo({
                          ...parentInfo,
                          preferredLanguage: value,
                        })
                      }
                    >
                      <SelectTrigger className="border-purple-200 focus:border-purple-400">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="Arabic">Arabic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-purple-900">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    value={parentInfo.address}
                    onChange={(e) =>
                      setParentInfo({ ...parentInfo, address: e.target.value })
                    }
                    className="border-purple-200 focus:border-purple-400 min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Child Information */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-900 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Child Information
                  </CardTitle>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Child
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-purple-600">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">
                    No children added yet
                  </p>
                  <p className="text-sm opacity-75">
                    Add your children's information to get started
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Preferences */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-purple-900">
                      Preferred Contact Channel
                    </Label>
                    <Select
                      value={contactPreferences.preferredChannel}
                      onValueChange={(value) =>
                        setContactPreferences({
                          ...contactPreferences,
                          preferredChannel: value,
                        })
                      }
                    >
                      <SelectTrigger className="border-purple-200 focus:border-purple-400">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Email">Email</SelectItem>
                        <SelectItem value="Phone">Phone</SelectItem>
                        <SelectItem value="SMS">SMS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-purple-900">
                      Preferred Contact Time
                    </Label>
                    <Select
                      value={contactPreferences.preferredTime}
                      onValueChange={(value) =>
                        setContactPreferences({
                          ...contactPreferences,
                          preferredTime: value,
                        })
                      }
                    >
                      <SelectTrigger className="border-purple-200 focus:border-purple-400">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning">Morning</SelectItem>
                        <SelectItem value="Afternoon">Afternoon</SelectItem>
                        <SelectItem value="Evening">Evening</SelectItem>
                        <SelectItem value="Anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-900 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Contacts
                  </CardTitle>
                  <Button
                    variant="outline"
                    className="border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Contact (0/3)
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-purple-600">
                  <Phone className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">
                    No emergency contacts added
                  </p>
                  <p className="text-sm opacity-75">
                    Add emergency contacts for your children
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Visibility Settings */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Visibility Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-purple-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-purple-900">
                      Let schools find me booking
                    </h3>
                    <p className="text-sm text-purple-600">
                      Allow schools to find and contact you directly
                    </p>
                  </div>
                  <Switch
                    checked={visibilitySettings.letSchoolsFind}
                    onCheckedChange={(checked) =>
                      setVisibilitySettings({
                        ...visibilitySettings,
                        letSchoolsFind: checked,
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Account Security */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Account Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
              </CardContent>
            </Card>

            {/* Save Changes */}
            <div className="flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Placeholders Section */}
      <div className="mt-16 bg-gradient-to-br from-purple-50 to-purple-100 p-5 border rounded-lg text-center">
        <p className="text-sm text-purple-600">
          Settings changes are logged for accountability. This tool is for
          planning purposes only and not financial advice. Consult financial
          advisors as needed.
        </p>
      </div>
    </div>
  );
}
