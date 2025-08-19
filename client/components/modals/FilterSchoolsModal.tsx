import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface FilterSchoolsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FilterSchoolsModal({ open, onOpenChange }: FilterSchoolsModalProps) {
  const [schoolTypes, setSchoolTypes] = useState<string[]>([]);
  const [gradeLevels, setGradeLevels] = useState<string[]>([]);
  const [maxDistance, setMaxDistance] = useState([20]);
  const [distanceFrom, setDistanceFrom] = useState('home');
  const [minRating, setMinRating] = useState([1]);
  const [availableSeats, setAvailableSeats] = useState<string[]>([]);

  const handleSchoolTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSchoolTypes([...schoolTypes, type]);
    } else {
      setSchoolTypes(schoolTypes.filter(t => t !== type));
    }
  };

  const handleGradeLevelChange = (grade: string, checked: boolean) => {
    if (checked) {
      setGradeLevels([...gradeLevels, grade]);
    } else {
      setGradeLevels(gradeLevels.filter(g => g !== grade));
    }
  };

  const handleAvailableSeatsChange = (seats: string, checked: boolean) => {
    if (checked) {
      setAvailableSeats([...availableSeats, seats]);
    } else {
      setAvailableSeats(availableSeats.filter(s => s !== seats));
    }
  };

  const handleApplyFilters = () => {
    // Handle filter logic here
    onOpenChange(false);
  };

  const handleCancel = () => {
    // Reset filters
    setSchoolTypes([]);
    setGradeLevels([]);
    setMaxDistance([20]);
    setDistanceFrom('home');
    setMinRating([1]);
    setAvailableSeats([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-purple-900 flex items-center justify-between">
            Filter Schools
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="h-6 w-6 p-0 text-purple-600 hover:text-purple-800"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* School Type */}
          <div className="space-y-4">
            <Label className="text-purple-900 font-medium text-base">School Type</Label>
            <div className="space-y-3">
              {['Public', 'Private', 'Charter'].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={schoolTypes.includes(type)}
                    onCheckedChange={(checked) => handleSchoolTypeChange(type, checked as boolean)}
                    className="border-purple-300 data-[state=checked]:bg-purple-600"
                  />
                  <Label htmlFor={type} className="text-purple-700 cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Grade Levels */}
          <div className="space-y-4">
            <Label className="text-purple-900 font-medium text-base">Grade Levels</Label>
            <div className="grid grid-cols-2 gap-3">
              {['K-5', '6-8', '9-12', 'K-12'].map((grade) => (
                <div key={grade} className="flex items-center space-x-2">
                  <Checkbox
                    id={grade}
                    checked={gradeLevels.includes(grade)}
                    onCheckedChange={(checked) => handleGradeLevelChange(grade, checked as boolean)}
                    className="border-purple-300 data-[state=checked]:bg-purple-600"
                  />
                  <Label htmlFor={grade} className="text-purple-700 cursor-pointer">
                    {grade}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Maximum Distance */}
          <div className="space-y-4">
            <Label className="text-purple-900 font-medium text-base">
              Maximum Distance: {maxDistance[0]} mi
            </Label>
            <Slider
              value={maxDistance}
              onValueChange={setMaxDistance}
              max={50}
              min={1}
              step={1}
              className="[&_[role=slider]]:bg-purple-600 [&_[role=slider]]:border-purple-600"
            />
            <div className="flex justify-between text-sm text-purple-600">
              <span>1 mi</span>
              <span>50 mi</span>
            </div>
          </div>

          {/* Calculate distance from */}
          <div className="space-y-4">
            <Label className="text-purple-900 font-medium text-base">Calculate distance from</Label>
            <RadioGroup value={distanceFrom} onValueChange={setDistanceFrom} className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="home" id="home" className="border-purple-300 text-purple-600" />
                <Label htmlFor="home" className="text-purple-700 cursor-pointer">Use home address</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="work" id="work" className="border-purple-300 text-purple-600" />
                <Label htmlFor="work" className="text-purple-700 cursor-pointer">Use work address</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" className="border-purple-300 text-purple-600" />
                <Label htmlFor="both" className="text-purple-700 cursor-pointer">Use both home and work address</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Minimum Rating */}
          <div className="space-y-4">
            <Label className="text-purple-900 font-medium text-base">
              Minimum Rating: {minRating[0]} star{minRating[0] !== 1 ? 's' : ''}
            </Label>
            <Slider
              value={minRating}
              onValueChange={setMinRating}
              max={5}
              min={1}
              step={0.5}
              className="[&_[role=slider]]:bg-purple-600 [&_[role=slider]]:border-purple-600"
            />
            <div className="flex justify-between text-sm text-purple-600">
              <span>1 star</span>
              <span>5 stars</span>
            </div>
          </div>

          {/* Available Seats */}
          <div className="space-y-4">
            <Label className="text-purple-900 font-medium text-base">Available Seats</Label>
            <div className="space-y-3">
              {['5+ seats', '10+ seats', '20+ seats'].map((seats) => (
                <div key={seats} className="flex items-center space-x-2">
                  <Checkbox
                    id={seats}
                    checked={availableSeats.includes(seats)}
                    onCheckedChange={(checked) => handleAvailableSeatsChange(seats, checked as boolean)}
                    className="border-purple-300 data-[state=checked]:bg-purple-600"
                  />
                  <Label htmlFor={seats} className="text-purple-700 cursor-pointer">
                    {seats}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-purple-200">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border-purple-200 text-purple-600 hover:bg-purple-50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleApplyFilters}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Apply Filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
