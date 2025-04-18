export const tableDefaultFields = [
  {
    field: "createdBy",
    headerText: "Created By",
    visible: false,
  },
  {
    field: "createdAt",
    headerText: "Created At",
    type: "date",
    // format: "dd/MM/yyyy",
    visible: false,
    
    template: "${new Date(data.createdAt).toLocaleDateString('en-GB')}" 
  },
  {
    field: "updatedBy",
    headerText: "Updated By",
    visible: false,
  },
  {
    field: "updatedAt",
    headerText: "Updated At",
    type: "date",
    visible: false,
    
    template: "${new Date(data.createdAt).toLocaleDateString('en-GB')}" 

  },
/*   {
    field: "deletedBy",
    headerText: "Deleted By",
    visible: true,
  },
  {
    field: "deletedAt",
    headerText: "Deleted At",
    type: "date",
    format: "dd/MM/yyyy",
    visible: true,
    
  }, */
];
