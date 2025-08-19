import { useState } from 'react';
import { FileText, Upload, Download, Plus, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

const requiredForms = [
  {
    id: 1,
    name: 'Immunization Records',
    status: 'Required',
    uploadStatus: 'Missing',
    actions: ['Missing', 'Upload']
  },
  {
    id: 2,
    name: 'Birth Certificate',
    status: 'Required',
    uploadStatus: 'Missing',
    actions: ['Missing', 'Upload']
  },
  {
    id: 3,
    name: 'Proof of Address (Utility Bill or Lease)',
    status: 'Required',
    uploadStatus: 'Missing',
    actions: ['Missing', 'Upload']
  },
  {
    id: 4,
    name: "Parent ID (Driver's License or ID)",
    status: 'Required',
    uploadStatus: 'Missing',
    actions: ['Missing', 'Upload']
  },
  {
    id: 5,
    name: 'Medical Authorization Form',
    status: '',
    uploadStatus: 'Missing',
    actions: ['Missing', 'Upload']
  }
];

export default function MyForms() {
  const [uploadingDocs, setUploadingDocs] = useState<number[]>([]);
  const completedCount = 0;
  const totalCount = 6;
  const progressPercentage = (completedCount / totalCount) * 100;

  const handleUpload = (formId: number) => {
    setUploadingDocs([...uploadingDocs, formId]);
    // Simulate upload
    setTimeout(() => {
      setUploadingDocs(uploadingDocs.filter(id => id !== formId));
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'required': return 'bg-red-100 text-red-700 hover:bg-red-100';
      case 'missing': return 'bg-orange-100 text-orange-700 hover:bg-orange-100';
      case 'uploaded': return 'bg-green-100 text-green-700 hover:bg-green-100';
      default: return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">My Forms</h1>
        <p className="text-purple-600">Upload and manage required childcare documents</p>
      </div>

      {/* Progress Section */}
      <Card className="mb-8 border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900">Submission Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-purple-700 font-medium">0% Complete</span>
              <span className="text-purple-600 text-sm">{completedCount} of {totalCount} Required Documents</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-purple-100">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </Progress>
          </div>
        </CardContent>
      </Card>

      {/* Standard Required Forms */}
      <Card className="mb-8 border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-900">Standard Required Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requiredForms.map((form) => (
              <div key={form.id} className="flex items-center justify-between p-4 border border-purple-200 rounded-lg hover:bg-purple-50/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-medium text-purple-900">{form.name}</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {form.status && (
                    <Badge className={getStatusColor(form.status)}>
                      {form.status}
                    </Badge>
                  )}
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      Missing
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => handleUpload(form.id)}
                      disabled={uploadingDocs.includes(form.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {uploadingDocs.includes(form.id) ? (
                        <span className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Uploading...
                        </span>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Documents */}
      <Card className="mb-8 border-purple-200 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-purple-900">Additional Documents</CardTitle>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Other Document
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-purple-600">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No additional documents uploaded</p>
            <p className="text-sm opacity-75">Add any other relevant documents for your application</p>
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800">
          <strong>Important:</strong> Documents are securely stored and shared only with authorized daycare centers. All uploads are encrypted and comply with privacy regulations.
        </AlertDescription>
      </Alert>
    </div>
  );
}
