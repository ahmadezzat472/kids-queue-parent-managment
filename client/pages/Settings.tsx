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
  Building,
  GraduationCap,
  Clock,
  DollarSign,
  Award,
  Calendar,
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
import { Checkbox } from "@/components/ui/checkbox";

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
  const [activeSettings, setActiveSettings] = useState("parent");

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

  // Administrator Settings State
  const [adminInfo, setAdminInfo] = useState({
    schoolName: "",
    schoolType: "Daycare",
    totalCapacity: "",
    operatingHours: "",
    schoolAddress: "",
    adminName: "",
    adminEmail: "",
    adminPhone: "",
    contactPreferences: "Email",
  });

  // Teacher Settings State
  const [teacherInfo, setTeacherInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    yearsExperience: "",
    certifications: [],
    specializations: "",
    preferredAgeGroups: [],
    salaryRange: "",
    availability: "",
    contactMethod: "Email",
  });

  const renderParentSettings = () => (
    <div className="space-y-8">
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold text-purple-900 mb-2">
          Parent Settings
        </h2>
      </div>

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
                  setParentInfo({ ...parentInfo, fullName: e.target.value })
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
                  setParentInfo({ ...parentInfo, preferredLanguage: value })
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
            <p className="text-lg font-medium mb-2">No children added yet</p>
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
              <Label className="text-purple-900">Preferred Contact Time</Label>
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
    </div>
  );

  const renderAdminSettings = () => (
    <div className="space-y-8">
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold text-purple-900 mb-2">
          School Administrator Settings
        </h2>
      </div>

      {/* School Information */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center">
            <Building className="w-5 h-5 mr-2" />
            School Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="schoolName" className="text-purple-900">
                School/Center Name
              </Label>
              <Input
                id="schoolName"
                value={adminInfo.schoolName}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, schoolName: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolType" className="text-purple-900">
                School Type
              </Label>
              <Select
                value={adminInfo.schoolType}
                onValueChange={(value) =>
                  setAdminInfo({ ...adminInfo, schoolType: value })
                }
              >
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Daycare">Daycare</SelectItem>
                  <SelectItem value="Preschool">Preschool</SelectItem>
                  <SelectItem value="Elementary">Elementary</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Charter">Charter</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="totalCapacity" className="text-purple-900">
                Total Capacity
              </Label>
              <Input
                id="totalCapacity"
                value={adminInfo.totalCapacity}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, totalCapacity: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="operatingHours" className="text-purple-900">
                Operating Hours
              </Label>
              <Input
                id="operatingHours"
                value={adminInfo.operatingHours}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, operatingHours: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="schoolAddress" className="text-purple-900">
              School Address
            </Label>
            <Textarea
              id="schoolAddress"
              value={adminInfo.schoolAddress}
              onChange={(e) =>
                setAdminInfo({ ...adminInfo, schoolAddress: e.target.value })
              }
              className="border-purple-200 focus:border-purple-400 min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Administrator Information */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Administrator Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="adminName" className="text-purple-900">
                Administrator Name
              </Label>
              <Input
                id="adminName"
                value={adminInfo.adminName}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, adminName: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminEmail" className="text-purple-900">
                Email
              </Label>
              <Input
                id="adminEmail"
                type="email"
                value={adminInfo.adminEmail}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, adminEmail: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="adminPhone" className="text-purple-900">
                Phone
              </Label>
              <Input
                id="adminPhone"
                value={adminInfo.adminPhone}
                onChange={(e) =>
                  setAdminInfo({ ...adminInfo, adminPhone: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminContactPrefs" className="text-purple-900">
                Contact Preferences
              </Label>
              <Select
                value={adminInfo.contactPreferences}
                onValueChange={(value) =>
                  setAdminInfo({ ...adminInfo, contactPreferences: value })
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
    </div>
  );

  const renderTeacherSettings = () => (
    <div className="space-y-8">
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold text-purple-900 mb-2">
          Teacher Settings
        </h2>
      </div>

      {/* Personal Information */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="teacherName" className="text-purple-900">
                Full Name
              </Label>
              <Input
                id="teacherName"
                value={teacherInfo.fullName}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, fullName: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teacherEmail" className="text-purple-900">
                Email
              </Label>
              <Input
                id="teacherEmail"
                type="email"
                value={teacherInfo.email}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, email: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="teacherPhone" className="text-purple-900">
                Phone
              </Label>
              <Input
                id="teacherPhone"
                value={teacherInfo.phone}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, phone: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsExperience" className="text-purple-900">
                Years of Experience
              </Label>
              <Input
                id="yearsExperience"
                value={teacherInfo.yearsExperience}
                onChange={(e) =>
                  setTeacherInfo({
                    ...teacherInfo,
                    yearsExperience: e.target.value,
                  })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-purple-900 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Professional Information
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label className="text-purple-900 font-medium mb-3 block">
                Certifications & Credentials
              </Label>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Certification
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specializations" className="text-purple-900">
                Specializations
              </Label>
              <Textarea
                id="specializations"
                value={teacherInfo.specializations}
                onChange={(e) =>
                  setTeacherInfo({
                    ...teacherInfo,
                    specializations: e.target.value,
                  })
                }
                className="border-purple-200 focus:border-purple-400 min-h-[80px]"
                placeholder="e.g., Special Education, Early Childhood Development"
              />
            </div>
          </div>

          <div>
            <Label className="text-purple-900 font-medium mb-3 block">
              Preferred Age Groups
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Infants (0-1)",
                "Toddlers (1-3)",
                "Preschool (3-5)",
                "School Age (5+)",
              ].map((age) => (
                <div key={age} className="flex items-center space-x-2">
                  <Checkbox
                    id={age}
                    className="border-purple-300 data-[state=checked]:bg-purple-600"
                  />
                  <Label
                    htmlFor={age}
                    className="text-purple-700 cursor-pointer"
                  >
                    {age}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Salary & Availability */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Salary & Availability
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="salaryRange" className="text-purple-900">
                Desired Salary Range
              </Label>
              <Select
                value={teacherInfo.salaryRange}
                onValueChange={(value) =>
                  setTeacherInfo({ ...teacherInfo, salaryRange: value })
                }
              >
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25k-35k">$25,000 - $35,000</SelectItem>
                  <SelectItem value="35k-45k">$35,000 - $45,000</SelectItem>
                  <SelectItem value="45k-55k">$45,000 - $55,000</SelectItem>
                  <SelectItem value="55k+">$55,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="availability" className="text-purple-900">
                Availability
              </Label>
              <Select
                value={teacherInfo.availability}
                onValueChange={(value) =>
                  setTeacherInfo({ ...teacherInfo, availability: value })
                }
              >
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="substitute">Substitute</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
        <CardContent>
          <div className="space-y-2">
            <Label className="text-purple-900">Preferred Contact Method</Label>
            <Select
              value={teacherInfo.contactMethod}
              onValueChange={(value) =>
                setTeacherInfo({ ...teacherInfo, contactMethod: value })
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
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 bg-purple-400 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-black mb-6">Settings</h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveSettings("parent")}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeSettings === "parent"
                  ? "bg-black text-purple-400"
                  : "text-black hover:bg-black/10"
              }`}
            >
              Parent Settings
            </button>
            <button
              onClick={() => setActiveSettings("admin")}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeSettings === "admin"
                  ? "bg-black text-purple-400"
                  : "text-black hover:bg-black/10"
              }`}
            >
              School Administrator Settings
            </button>
            <button
              onClick={() => setActiveSettings("teacher")}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeSettings === "teacher"
                  ? "bg-black text-purple-400"
                  : "text-black hover:bg-black/10"
              }`}
            >
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

          {activeSettings === "parent" && renderParentSettings()}
          {activeSettings === "admin" && renderAdminSettings()}
          {activeSettings === "teacher" && renderTeacherSettings()}

          {/* Save Changes */}
          <div className="flex justify-end mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Save Changes
            </Button>
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
