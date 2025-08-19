import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface AdvancedSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdvancedSearchModal({ open, onOpenChange }: AdvancedSearchModalProps) {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [maxDistance, setMaxDistance] = useState('');

  const handleApplySearch = () => {
    // Handle search logic here
    onOpenChange(false);
  };

  const handleCancel = () => {
    setSelectedGrade('');
    setSelectedType('');
    setMaxDistance('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-purple-900 flex items-center justify-between">
            Advanced Search
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

        <div className="space-y-6 py-4">
          {/* Select Grade */}
          <div className="space-y-2">
            <Label htmlFor="grade" className="text-purple-900 font-medium">
              Select grade
            </Label>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="border-purple-200 focus:border-purple-400">
                <SelectValue placeholder="All grades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All grades</SelectItem>
                <SelectItem value="k">Kindergarten</SelectItem>
                <SelectItem value="1">Grade 1</SelectItem>
                <SelectItem value="2">Grade 2</SelectItem>
                <SelectItem value="3">Grade 3</SelectItem>
                <SelectItem value="4">Grade 4</SelectItem>
                <SelectItem value="5">Grade 5</SelectItem>
                <SelectItem value="6">Grade 6</SelectItem>
                <SelectItem value="7">Grade 7</SelectItem>
                <SelectItem value="8">Grade 8</SelectItem>
                <SelectItem value="9">Grade 9</SelectItem>
                <SelectItem value="10">Grade 10</SelectItem>
                <SelectItem value="11">Grade 11</SelectItem>
                <SelectItem value="12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Type */}
          <div className="space-y-2">
            <Label htmlFor="type" className="text-purple-900 font-medium">
              Select type
            </Label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="border-purple-200 focus:border-purple-400">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="charter">Charter</SelectItem>
                <SelectItem value="magnet">Magnet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Max Distance */}
          <div className="space-y-2">
            <Label htmlFor="distance" className="text-purple-900 font-medium">
              Max distance
            </Label>
            <Select value={maxDistance} onValueChange={setMaxDistance}>
              <SelectTrigger className="border-purple-200 focus:border-purple-400">
                <SelectValue placeholder="Any distance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any distance</SelectItem>
                <SelectItem value="1">Within 1 mile</SelectItem>
                <SelectItem value="2">Within 2 miles</SelectItem>
                <SelectItem value="5">Within 5 miles</SelectItem>
                <SelectItem value="10">Within 10 miles</SelectItem>
                <SelectItem value="20">Within 20 miles</SelectItem>
              </SelectContent>
            </Select>
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
            onClick={handleApplySearch}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Apply Search
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
