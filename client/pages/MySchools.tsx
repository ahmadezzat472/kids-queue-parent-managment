import { useState } from 'react';
import { ArrowLeft, Plus, Filter, Download, MoreHorizontal, Phone, Star, MapPin, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const currentSchool = {
  childName: 'Emma Johnson',
  school: 'Little Acorns Daycare',
  address: '123 Pine St, Springfield',
  distance: '1.2 mi',
  contact: 'Sarah Johnson',
  phone: '(555) 123-4567',
  email: 'sarah.johnson@email.com',
  amenities: 'Playground, Hot Meals, Art Program',
  price: '$1,200/month',
  status: 'Enrolled'
};

const waitlistEntries = [
  {
    id: 1,
    childName: 'Emma Johnson',
    school: 'Little Stars Preschool',
    distance: '0.5 mi',
    contact: 'Sarah Johnson',
    phone: '(555) 123-4567',
    email: 'sarah.johnson@email.com',
    amenities: 'Music, Outdoor Play',
    price: '$900/month',
    status: 'Pending'
  },
  {
    id: 2,
    childName: 'Liam Chen',
    school: 'Sunshine Academy',
    distance: '2.3 mi',
    contact: 'David Chen',
    phone: '(555) 234-5678',
    email: 'david.chen@email.com',
    amenities: 'STEM, Art, Sports',
    price: '$1,100/month',
    status: 'Pending'
  },
  {
    id: 3,
    childName: 'Sofia Rodriguez',
    school: 'Rainbow Learning Center',
    distance: '1.8 mi',
    contact: 'Maria Rodriguez',
    phone: '(555) 345-6789',
    email: 'maria.rodriguez@email.com',
    amenities: 'Bilingual, Music',
    price: '$1,000/month',
    status: 'Waitlisted'
  },
  {
    id: 4,
    childName: 'Oliver Smith',
    school: 'Bright Minds Daycare',
    distance: '1.5 mi',
    contact: 'Michael Smith',
    phone: '(555) 456-7890',
    email: 'michael.smith@email.com',
    amenities: 'Extended Hours',
    price: '$1,350/month',
    status: 'Applied'
  },
  {
    id: 5,
    childName: 'Ava Williams',
    school: 'Creative Kids Academy',
    distance: '3.2 mi',
    contact: 'Jennifer Williams',
    phone: '(555) 567-8901',
    email: 'jennifer.williams@email.com',
    amenities: 'Art, Dance, Music',
    price: '$1,250/month',
    status: 'Waitlisted'
  }
];

export default function MySchools() {
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredEntries = statusFilter === 'all' 
    ? waitlistEntries 
    : waitlistEntries.filter(entry => entry.status.toLowerCase() === statusFilter);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'enrolled': return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'pending': return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100';
      case 'waitlisted': return 'bg-orange-100 text-orange-700 hover:bg-orange-100';
      case 'applied': return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      default: return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Link to="/">
              <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-purple-900">My Schools</h1>
          <p className="text-purple-600">Manage your children's school applications and waitlists</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="w-4 h-4 mr-2" />
          Add/Edit Current School
        </Button>
      </div>

      {/* Current School Section */}
      <Card className="mb-8 border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900">Current School</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-purple-200">
                  <TableHead className="text-purple-700">Child Name</TableHead>
                  <TableHead className="text-purple-700">School</TableHead>
                  <TableHead className="text-purple-700">Distance</TableHead>
                  <TableHead className="text-purple-700">Contact</TableHead>
                  <TableHead className="text-purple-700">Amenities</TableHead>
                  <TableHead className="text-purple-700">Price</TableHead>
                  <TableHead className="text-purple-700">Status</TableHead>
                  <TableHead className="text-purple-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-purple-100">
                  <TableCell className="font-medium text-purple-900">{currentSchool.childName}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-purple-900">{currentSchool.school}</div>
                      <div className="text-sm text-purple-600">{currentSchool.address}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-purple-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {currentSchool.distance}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-purple-900">{currentSchool.contact}</div>
                      <div className="text-sm text-purple-600 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {currentSchool.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-purple-600">{currentSchool.amenities}</div>
                  </TableCell>
                  <TableCell className="text-purple-900 font-medium">{currentSchool.price}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(currentSchool.status)}>
                      {currentSchool.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Current Waitlist Entries */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-purple-900">Current Waitlist Entries</CardTitle>
            <div className="flex items-center space-x-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32 border-purple-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="waitlisted">Waitlisted</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
          <p className="text-sm text-purple-600">Drag to reorder ranking / preference</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-purple-200">
                  <TableHead className="text-purple-700">Child Name</TableHead>
                  <TableHead className="text-purple-700">School</TableHead>
                  <TableHead className="text-purple-700">Distance</TableHead>
                  <TableHead className="text-purple-700">Contact</TableHead>
                  <TableHead className="text-purple-700">Amenities</TableHead>
                  <TableHead className="text-purple-700">Price</TableHead>
                  <TableHead className="text-purple-700">Status</TableHead>
                  <TableHead className="text-purple-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEntries.map((entry, index) => (
                  <TableRow key={entry.id} className="border-purple-100">
                    <TableCell className="font-medium text-purple-900">{entry.childName}</TableCell>
                    <TableCell>
                      <div className="font-medium text-purple-900">{entry.school}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-purple-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {entry.distance}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-purple-900">{entry.contact}</div>
                        <div className="text-sm text-purple-600 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {entry.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-purple-600">{entry.amenities}</div>
                    </TableCell>
                    <TableCell className="text-purple-900 font-medium">{entry.price}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(entry.status)}>
                        {entry.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
