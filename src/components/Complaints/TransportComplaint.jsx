import {
    DataTableCell,
    Table,
    TableBody,
    TableCell,
    TableHeader,
  } from "@david.kucsai/react-pdf-table"
  import {
    Document,
    Image,
    Page,
    StyleSheet,
    Text,
    View,
  } from "@react-pdf/renderer";
  import React from "react";
  
  const styles = StyleSheet.create({
    heading: {
      marginTop: "30px",
      textAlign: "center",
      fontSize: "24px",
    },
    sub_heading: {
      textAlign: "left",
      fontSize: "15px",
      marginTop: "10px",
    },
    content: {
      textAlign: "left",
      fontSize: "10px",
      marginTop: "5px",
    },
  });
  
  const TransportComplaint = ({ title, description, vehicle_no, driver_id, conductor_id }) => (
    <Document
      title="Telecom Complaint Form"
      author="Wingman Inc."
      subject="Submitted Complaint Form View"
    >
      <Page size="A4">
        <Image
          src="/Complaint_heading_transport.png"
          style={{ width: "100%", height: "auto" }}
        />
        <Text style={styles.heading}>Complaint Form Preview</Text>
        <View style={{ margin: "50px" }}>
          <Table
            data={[
              {
                field: "Complaint Title",
                content: title,
              },
              {
                field: "Description",
                content: description,
              },
              {
                field: "Vehicle No",
                content: vehicle_no,
              },
              {
                field: "Driver ID",
                content: driver_id,
              },
              {
                field: "Conductor ID",
                content: conductor_id,
              }
            ]}
          >
            <TableHeader>
              <TableCell weighting={0.6}>
                Field
              </TableCell>
              <TableCell>
                Content
              </TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell weighting={0.6} getContent={(r) => r.field} />
              <DataTableCell getContent={(r) => r.content} />
            </TableBody>
          </Table>
        </View>
        <Image
          src="/complaint_footer.png"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            bottom: "0px",
          }}
        />
      </Page>
    </Document>
  );
  
  export default TransportComplaint;
  