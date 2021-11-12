import {
  DataTableCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from "@david.kucsai/react-pdf-table";
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

const HealthcareComplaint = ({ issue, description, name, phone, email }) => (
  <Document
    title="Telecom Complaint Form"
    author="Wingman Inc."
    subject="Submitted Complaint Form View"
  >
    <Page size="A4">
      <Image
        src="/Complaint_heading_healthcare.png"
        style={{ width: "100%", height: "auto" }}
      />
      <Text style={styles.heading}>Complaint Form Preview</Text>
      <View style={{ margin: "50px" }}>
        <Table
          data={[
            {
              field: "Issue",
              content: issue,
            },
            {
              field: "Description",
              content: description,
            },
            {
              field: "Name of the complainer",
              content: name,
            },
            {
              field: "Name of the complainer",
              content: name,
            },
            {
              field: "Phone number of the complainer",
              content: phone,
            },
            {
              field: "Email address of the complainer",
              content: email,
            },
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

export default HealthcareComplaint;
