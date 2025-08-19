import { useState } from 'react';
import { Search, Filter, MoreHorizontal, Star, MapPin, Phone, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AdvancedSearchModal } from '@/components/modals/AdvancedSearchModal';
import { FilterSchoolsModal } from '@/components/modals/FilterSchoolsModal';

const schools = [
  {
    id: 1,
    name: 'Riverside Elementary',
    address: '125 Oak Street, Springfield',
    rating: 4.2,
    type: 'Public',
    grades: 'K-5',
    distance: '1.2 mi',
    phone: '(555) 123-4567',
    available: true,
  },
  {
    id: 2,
    name: 'Mountain View Academy',
    address: '456 Pine Avenue, Springfield',
    rating: 4.5,
    type: 'Private',
    grades: 'K-8',
    distance: '2.1 mi',
    phone: '(555) 234-5678',
    available: true,
  },
  {
    id: 3,
    name: 'Springfield Charter School',
    address: '789 Maple Drive, Springfield',
    rating: 4.1,
    type: 'Charter',
    grades: 'K-12',
    distance: '3.2 mi',
    phone: '(555) 345-6789',
    available: false,
  },
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">School Finder</h1>
        <p className="text-purple-600">Find the perfect school for your child</p>
      </div>

      {/* Search Section */}
      <Card className="mb-8 border-purple-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
              <Input
                placeholder="Search schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowAdvancedSearch(true)}
                className="h-12 border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                Advanced
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowFilters(true)}
                className="h-12 border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <Card className="border-purple-200 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              School Locations
            </h2>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Map placeholder with some visual elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-100 to-blue-200 opacity-60"></div>
              <div className="absolute top-12 left-16 w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
              <div className="absolute top-24 right-20 w-3 h-3 bg-purple-600 rounded-full shadow-lg"></div>
              <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-600 rounded-full shadow-lg"></div>
              <div className="relative z-10 text-purple-600 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm opacity-75">Showing {schools.length} schools in your area</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schools List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-purple-900">
              Available Schools ({schools.length})
            </h2>
            <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {schools.map((school) => (
              <Card key={school.id} className="border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-purple-900 text-lg mb-1">{school.name}</h3>
                      <p className="text-purple-600 text-sm mb-2">{school.address}</p>
                      <div className="flex items-center gap-4 text-sm text-purple-600">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {school.rating}
                        </div>
                        <span>•</span>
                        <span>{school.distance}</span>
                      </div>
                    </div>
                    <Badge variant={school.available ? "default" : "secondary"} className={school.available ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}>
                      {school.available ? "Available" : "Waitlist"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-purple-600">{school.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-purple-600">Grades {school.grades}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Phone className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-purple-600">{school.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      Add to Watchlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AdvancedSearchModal
        open={showAdvancedSearch}
        onOpenChange={setShowAdvancedSearch}
      />
      <FilterSchoolsModal
        open={showFilters}
        onOpenChange={setShowFilters}
      />
    </div>
  );
}
